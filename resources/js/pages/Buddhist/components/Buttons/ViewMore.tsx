import useTranslation from '@/hooks/use-translation';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import { styled } from 'styled-components';

const ViewMore = ({ href = '#', text = 'See More' }) => {
    
    
    const { t, currentLocale } = useTranslation();
    return (
        <StyledWrapper>
            <div className='flex items-center justify-center'>
                <Link prefetch href={href} className="learn-more" aria-label={text}>
                    <span className="circle" aria-hidden="true">
                        <ArrowRightIcon size={14} className="text-white" />
                    </span>
                    <span className="button-text text-primary dark:text-white">{t(text)}</span>
                </Link>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .learn-more {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
        padding: 0;
        font-family: inherit;
        width: 8rem;
        height: 2.8rem;
        border-radius: 100px;
        overflow: hidden;
        text-decoration: none;
    }

    /* Circle */
    .learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2rem;
        height: 2rem;
        margin: auto 0;
        background: linear-gradient(135deg, #8b262b, #a83238);
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 0.6rem;
    }

    /* Arrow */
    .learn-more .circle .icon.arrow {
        transition: transform 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        width: 8px;
        height: 0.1rem;
        background: #fff;
        position: relative;
    }

    .learn-more .circle .icon.arrow::before {
        content: '';
        position: absolute;
        top: -0.22rem;
        right: -0.1rem;
        width: 0.45rem;
        height: 0.45rem;
        border-top: 0.1rem solid #fff;
        border-right: 0.1rem solid #fff;
        transform: rotate(45deg);
    }

    /* Text */
    .learn-more .button-text {
        position: absolute;
        left: 2rem;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: color 0.3s ease;
        padding-left: 0.5rem;
    }

    /* Hover effects */
    .learn-more:hover .circle {
        width: 100%;
        border-radius: 100px;
        background: linear-gradient(135deg, #a83238, #d9484b);
    }

    .learn-more:hover .circle .icon.arrow {
        transform: translateX(0.25rem);
    }

    .learn-more:hover .button-text {
        color: #fff;
    }
`;

export default ViewMore;
