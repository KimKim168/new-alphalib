import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Button = () => {
    const { t, currentLocale } = useTranslation();

    const { resource } = usePage<any>().props;

    return (
        <StyledWrapper>
            <div className="section-container mt-10">
                <h1 className="mb-2 text-2xl font-semibold text-black dark:text-[#ffff]">{t('Resources')}:</h1>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                    {resource?.map((item: any, index: number) => (
                        <a
                            key={item?.id ?? index}
                            href={item?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="codepen-button shadow-md shadow-gray-300"
                        >
                            <div className="flex aspect-square items-center justify-center rounded-xl bg-white p-3">
                                <img
                                    src={`/assets/images/banalai_library/thumb/${item?.icon}`}
                                    alt={currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                    className="mx-auto block w-full object-contain"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .codepen-button {
        display: inline-block;
        position: relative;
        cursor: pointer;
        border-radius: 12px;
        padding: 3px;
        overflow: hidden;
        isolation: isolate;
    }

    /* Default gray border */
    .codepen-button::before {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        border-radius: 12px;
        background: #1b6593; /* gray-600 */
        z-index: -1;
        transition: background 0.3s ease;
    }

    /* Animate gradient on hover */
    .codepen-button:hover::before {
        background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
        background-size: 300% 300%;
        animation: ${gradientAnimation} 3s linear infinite;
    }

    /* Make images fit the inner space */
    .codepen-button img {
        display: block;
        width: 100%;
        border-radius: 12px;
    }
`;

export default Button;
