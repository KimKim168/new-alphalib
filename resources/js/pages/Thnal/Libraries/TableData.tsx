import NoDataDisplay from '@/components/NoDataDisplay';
import LibraryResultItem from '../components/LibraryResultItem';

const TableData = () => {
   
    const tableData = {
        data: [
            {
                id: 1,
                title: 'The treatise on laws : (Decretum DD. 1–20)',
                authors: ['Gratian', 'Augustine Thompson', 'James Gordley', 'Katherine Christensen'],
                summary:
                    'Annotation The first twenty distinctions, translated here, comprise a treatise on law in general and contain a discussion of the nature of law, voluntary action, and the...',
                language: 'English',
                year: 1993,
                format: 'eBook',
                publisher: 'Catholic University of America Press',
                location: 'Washington, D.C.',
                thumbnail: 'https://coverart.oclc.org/ImageWebSvc/oclc/+-+989842613_140.jpg?allowDefault=false&client=WorldcatOrgUI',
                externalLink:'/',
            },
            {
                id: 2,
                title: 'History of Cambodia',
                authors: ['James Gordley', 'Katherine Christensen'],
                summary:
                    'Annotation The first twenty distinctions, translated here, comprise a treatise on law in general and contain a discussion of the nature of law, voluntary action, and the...',
                language: 'English',
                year: 1993,
                format: 'eBook',
                publisher: 'Catholic University of America Press',
                location: 'Washington, D.C.',
                thumbnail: 'https://coverart.oclc.org/ImageWebSvc/oclc/+-+0414656176_140.jpg?allowDefault=false&client=WorldcatOrgUI',
                externalLink:'/',

            },
        ],
    };

    return (
        <>
            <div className="rounded-lg bg-white">
                {tableData.data.map((item) => (
                    <LibraryResultItem key={item.id} item={item}  />
                ))}
            </div>

            {tableData.data.length < 1 && <NoDataDisplay />}
        </>
    );
};

export default TableData;
