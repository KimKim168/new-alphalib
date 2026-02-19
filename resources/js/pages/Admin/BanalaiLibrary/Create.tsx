import AlertFlashMessage from '@/components/Alert/AlertFlashMessage';
import AllErrorsAlert from '@/components/Alert/AllErrorsAlert';
import SubmitButton from '@/components/Button/SubmitButton';
import FormFileUpload from '@/components/Form/FormFileUpload';
import UploadedFile from '@/components/Form/UploadedFileDisplay';
import UploadedImage from '@/components/Form/UploadedImageDisplay';
import { FormField } from '@/components/Input/FormField';
import { FormLabel } from '@/components/Input/FormLabel';
import { ProgressWithValue } from '@/components/ProgressBar/progress-with-value';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import useTranslation from '@/hooks/use-translation';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import MyCkeditor5 from '@/pages/plugins/ckeditor5/my-ckeditor5';
import { BreadcrumbItem } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface PageForm {
    name: string;
    name_kh?: string;

    phone?: string;
    telegram?: string;
    email?: string;
    short_description?: string;
    short_description_kh?: string;

    long_description?: string;
    long_description_kh?: string;

    link?: string;
    icon?: string;

    library_supporter_name?: string;
    library_supporter_chat_link?: string;
    website?: string;
    facebook?: string;

    total_views_count?: number;
    order_index?: number;
}

export default function Create({ editData, readOnly }: { editData?: any; readOnly?: boolean }) {
    const [flashMessage, setFlashMessage] = useState<{ message: string; type: string }>({
        message: '',
        type: 'message',
    });

    const [inputLanguage, setInputLanguage] = useState<'default' | 'khmer'>('default');

    const { types, library_data, selected_page_code } = usePage<any>().props;

    const [files, setFiles] = useState<File[] | null>(null);
    const [imageFiles, setImageFiles] = useState<File[] | null>(null);

    const [uploadFiles, setUploadFiles] = useState<File[] | null>(null);

    const { data, setData, post, processing, transform, progress, errors, reset } = useForm<PageForm>({
        name: editData?.name || '',
        name_kh: editData?.name_kh || '',
        phone: editData?.phone || '',
        telegram: editData?.telegram || '',
        email: editData?.email || '',
        order_index: editData?.order_index || 10000,
        short_description: editData?.short_description || '',
        short_description_kh: editData?.short_description_kh || '',
        long_description: editData?.long_description || '',
        long_description_kh: editData?.long_description_kh || '',
        link: editData?.link || '',
        icon: editData?.icon || '',
        total_views_count: editData?.total_views_count || 0,
        library_supporter_name: editData?.library_supporter_name || '',
        library_supporter_chat_link: editData?.library_supporter_chat_link || '',
        website: editData?.website || '',
        facebook: editData?.facebook || '',
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        transform(() => ({ ...data, icon: files ? files[0] : null, images: imageFiles || null, upload_files: uploadFiles || null }));

        if (editData?.id) {
            post(`/admin/libraries/${editData.id}/update`, {
                onSuccess: (page: any) => {
                    setFiles(null);
                    setImageFiles(null);
                    setUploadFiles(null);
                    setFlashMessage({ message: page.props.flash?.success, type: 'success' });
                },
            });
        } else {
            post('/admin/libraries', {
                onSuccess: (page: any) => {
                    reset();
                    setFiles(null);
                    setImageFiles(null);
                    setUploadFiles(null);
                    setFlashMessage({ message: page.props.flash?.success, type: 'success' });
                },
            });
        }
    };

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Libraries', href: '/admin/libraries' },
        { title: editData?.name || 'Create', href: '#' },
    ];

    const { t, currentLocale } = useTranslation();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <form onSubmit={onSubmit} className="form">
                <AlertFlashMessage
                    key={flashMessage.message}
                    type={flashMessage.type}
                    flashMessage={flashMessage.message}
                    setFlashMessage={setFlashMessage}
                />
                {errors && <AllErrorsAlert title="Please fix the following errors" errors={errors} />}

                {/* <div className="sticky top-0">
                    <Tabs value={inputLanguage} onValueChange={(val: any) => setInputLanguage(val)}>
                        <TabsList className="border bg-border/50 p-1 dark:border-white/20">
                            <TabsTrigger value="default" className="h-full dark:data-[state=active]:bg-white/20">
                                {t('Default')}
                            </TabsTrigger>
                            <TabsTrigger value="khmer" className="h-full dark:data-[state=active]:bg-white/20">
                                {t('Khmer')}
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div> */}
                <div className="form-field-container">
                    <FormField
                        required
                        id="name"
                        name="name"
                        label="Library Name"
                        value={data.name}
                        onChange={(val) => setData('name', val)}
                        error={errors.name}
                        containerClassName="col-span-2 md:col-span-1"
                    />
                    <FormField
                        id="name_kh"
                        name="name_kh"
                        label="Library Name Khmer"
                        value={data.name_kh}
                        onChange={(val) => setData('name_kh', val)}
                        error={errors.name_kh}
                        containerClassName="col-span-2 md:col-span-1"
                    />
                   
                    <FormField
                        id="website"
                        name="website"
                        label="Website Library URL"
                        value={data.website || ''}
                        onChange={(val) => setData('website', val)}
                        error={errors.website}
                    />

                    <FormField
                        id="facebook"
                        name="facebook"
                        label="Facebook Library URL"
                        value={data.facebook || ''}
                        onChange={(val) => setData('facebook', val)}
                        error={errors.facebook}
                    />
                    {/* <FormFieldTextArea
                        id="short_description"
                        name="short_description"
                        label="Short Description"
                        value={data.short_description}
                        onChange={(val) => setData('short_description', val)}
                        error={errors.short_description}
                    /> */}
                    <FormField
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={data.phone}
                        onChange={(val) => setData('phone', val)}
                        error={errors.phone}
                    />
                    <FormField
                        id="telegram"
                        name="telegram"
                        label="Telegram Library URL"
                        value={data.telegram}
                        onChange={(val) => setData('telegram', val)}
                        error={errors.telegram}
                        description="Example: https://t.me/username"
                    />
                    <FormField
                        id="email"
                        name="email"
                        label="Email"
                        value={data.email}
                        onChange={(val) => setData('email', val)}
                        error={errors.email}
                    />
                    
                    <FormField
                        required
                        type="number"
                        id="order_index"
                        name="order_index"
                        label="Order Index"
                        value={data.order_index || 100}
                        onChange={(val) => setData('order_index', Number(val))}
                        error={errors.order_index}
                        description="Lower number has higher priority."
                    />

                    
                     <FormField
                        id="library_supporter_name"
                        name="library_supporter_name"
                        label="Library Supporter Name"
                        value={data.library_supporter_name || ''}
                        onChange={(val) => setData('library_supporter_name', val)}
                        error={errors.library_supporter_name}
                    />

                    <FormField
                        id="library_supporter_chat_link"
                        name="library_supporter_chat_link"
                        label="Supporter Chat Link"
                        value={data.library_supporter_chat_link || ''}
                        onChange={(val) => setData('library_supporter_chat_link', val)}
                        error={errors.library_supporter_chat_link}
                        description="Example: https://t.me/username"
                    />
                    <FormField
                        id="link"
                        name="link"
                        label="External Link"
                        value={data.link || ''}
                        onChange={(val) => setData('link', val)}
                        error={errors.link}
                        containerClassName='col-span-2'
                    />

                    {/* <div className="col-span-2 grid content-start gap-2">
                        <FormLabel label="Long Description" />
                        <MyCkeditor5 data={data.long_description || ''} setData={(val: any) => setData('long_description', val)} />
                    </div> */}

                    <div className="col-span-2">
                        <Tabs defaultValue="icon" className="w-full rounded-lg bg-muted/80 p-4">
                            {/* <TabsList className="border bg-border/50 p-1 dark:border-white/20">
                                    <TabsTrigger value="icon" className="h-full dark:data-[state=active]:bg-white/20">
                                        {t('Icon')}
                                    </TabsTrigger>
                                    <TabsTrigger value="images" className="h-full dark:data-[state=active]:bg-white/20">
                                        {t('Images')}
                                    </TabsTrigger>
                                </TabsList> */}
                            <TabsContent value="icon">
                                <div className={cn('form-field-container', !editData?.icon && 'md:grid-cols-1')}>
                                    <FormFileUpload key={editData?.icon} id="icon" label="Logo" files={files} setFiles={setFiles} />

                                    {editData?.icon && (
                                        <UploadedImage
                                            containerClassName="mt-0"
                                            imageContainerClassName="flex-1"
                                            label="Uploaded Icon"
                                            images={editData?.icon}
                                            basePath="/assets/images/banalai_library/thumb/"
                                        />
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="images">
                                <div>
                                    <FormFileUpload
                                        dropzoneOptions={{
                                            maxFiles: 100,
                                            maxSize: 1024 * 1024 * 4,
                                            multiple: true,
                                            accept: {
                                                'image/jpeg': ['.jpeg', '.jpg'],
                                                'image/png': ['.png'],
                                                'image/gif': ['.gif'],
                                                'image/webp': ['.webp'],
                                            },
                                        }}
                                        key={editData?.images?.map((img: any) => img.image || img).join('-')}
                                        id="images"
                                        label="Images"
                                        files={imageFiles}
                                        setFiles={setImageFiles}
                                    />
                                    {editData?.images?.length > 0 && (
                                        <UploadedImage
                                            label="Uploaded Images"
                                            permission="post update"
                                            images={editData?.images}
                                            deletePath="/admin/banalai_library/images/"
                                            basePath="/assets/images/banalai_library/thumb/"
                                        />
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <div className="w-full rounded-lg bg-muted/80 p-4">
                    <FormFileUpload
                        dropzoneOptions={{
                            maxFiles: 1,
                            maxSize: 1024 * 1024 * 4, // 4MB
                            multiple: false,
                            accept: {
                                'application/vnd.ms-excel': ['.xls'],
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                            },
                        }}
                        key={editData?.files?.map((img: any) => img.image || img).join('-')}
                        id="files"
                        label="Files"
                        files={uploadFiles}
                        setFiles={setUploadFiles}
                    />
                    {editData?.files?.length > 0 && (
                        <UploadedFile
                            fileClassName="bg-background"
                            label="Uploaded Files"
                            permission="post update"
                            files={editData?.files}
                            deletePath="/admin/libraries/files/"
                            basePath="/assets/files/bannalai/"
                        />
                    )}
                </div>

                {/* {inputLanguage == 'khmer' ? (
                    <div className="form-field-container md:grid-cols-1">
                        <FormField
                            id="name_kh"
                            name="name_kh"
                            label="Name Khmer"
                            value={data.name_kh}
                            onChange={(val) => setData('name_kh', val)}
                            error={errors.name_kh}
                            containerClassName="col-span-2"
                        />
                         <div className="col-span-2 grid content-start gap-2">
                            <FormLabel label="Short Description Khmer" />
                            <MyCkeditor5 data={data.short_description_kh || ''} setData={(val: any) => setData('short_description_kh', val)} />
                        </div>

                        <div className="col-span-2 grid content-start gap-2">
                            <FormLabel label="Long Description Khmer" />
                            <MyCkeditor5 data={data.long_description_kh || ''} setData={(val: any) => setData('long_description_kh', val)} />
                        </div>
                    </div>
                ) : (
                    <div className="form-field-container">
                        <FormField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            value={data.name}
                            onChange={(val) => setData('name', val)}
                            error={errors.name}
                            containerClassName="col-span-2"
                        />
                        <div className="col-span-2 grid content-start gap-2">
                            <FormLabel label="Short Description" />
                            <MyCkeditor5 data={data.short_description || ''} setData={(val: any) => setData('short_description', val)} />
                        </div>
                        <FormFieldTextArea
                            id="short_description"
                            name="short_description"
                            label="Short Description"
                            value={data.short_description}
                            onChange={(val) => setData('short_description', val)}
                            error={errors.short_description}
                            containerClassName="col-span-2"
                        />
                        <FormField
                            required
                            type="number"
                            id="order_index"
                            name="order_index"
                            label="Order Index"
                            value={data.order_index || 100}
                            onChange={(val) => setData('order_index', Number(val))}
                            error={errors.order_index}
                            description="Lower number has higher priority."
                        />

                        <FormField
                            id="link"
                            name="link"
                            label="External Link"
                            value={data.link || ''}
                            onChange={(val) => setData('link', val)}
                            error={errors.link}
                        />
                        <div className="col-span-2 grid content-start gap-2">
                            <FormLabel label="Long Description" />
                            <MyCkeditor5 data={data.long_description || ''} setData={(val: any) => setData('long_description', val)} />
                        </div>

                        <div className="col-span-2">
                            <Tabs defaultValue="icon" className="w-full rounded-lg bg-muted/80 p-4">
                                <TabsList className="border bg-border/50 p-1 dark:border-white/20">
                                    <TabsTrigger value="icon" className="h-full dark:data-[state=active]:bg-white/20">
                                        {t('Icon')}
                                    </TabsTrigger>
                                    <TabsTrigger value="images" className="h-full dark:data-[state=active]:bg-white/20">
                                        {t('Images')}
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="icon">
                                    <div className={cn('form-field-container', !editData?.icon && 'md:grid-cols-1')}>
                                        <FormFileUpload key={editData?.icon} id="icon" label="Logo" files={files} setFiles={setFiles} />

                                        {editData?.icon && (
                                            <UploadedImage
                                                containerClassName="mt-0"
                                                imageContainerClassName="flex-1"
                                                label="Uploaded Icon"
                                                images={editData?.icon}
                                                basePath="/assets/images/banalai_library/thumb/"
                                            />
                                        )}
                                    </div>
                                </TabsContent>
                                <TabsContent value="images">
                                    <div>
                                        <FormFileUpload
                                            dropzoneOptions={{
                                                maxFiles: 100,
                                                maxSize: 1024 * 1024 * 4,
                                                multiple: true,
                                                accept: {
                                                    'image/jpeg': ['.jpeg', '.jpg'],
                                                    'image/png': ['.png'],
                                                    'image/gif': ['.gif'],
                                                    'image/webp': ['.webp'],
                                                },
                                            }}
                                            key={editData?.images?.map((img: any) => img.image || img).join('-')}
                                            id="images"
                                            label="Images"
                                            files={imageFiles}
                                            setFiles={setImageFiles}
                                        />
                                        {editData?.images?.length > 0 && (
                                            <UploadedImage
                                                label="Uploaded Images"
                                                permission="post update"
                                                images={editData?.images}
                                                deletePath="/admin/banalai_library/images/"
                                                basePath="/assets/images/banalai_library/thumb/"
                                            />
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                )} */}

                {progress && <ProgressWithValue value={progress.percentage} position="start" />}

                {!readOnly && <SubmitButton processing={processing} />}
            </form>
        </AppLayout>
    );
}
