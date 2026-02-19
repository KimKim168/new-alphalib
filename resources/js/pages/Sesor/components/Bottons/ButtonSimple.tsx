import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { styled } from 'styled-components';

const ButtonSimple = ({ title, link, targetBlank }: any) => {
    const isExternal = link.startsWith('http');
    return (
        <StyledWrapper>
            <Button
                asChild
                className={cn(
                    'button w-[200px] bg-primary-two px-2 font-manrope-bold text-[13px] text-primary transition-all hover:bg-primary-two md:text-[15px]',
                    'newStyle',
                )}
            >
                {isExternal ? (
                    <a href={link} target={targetBlank ? '_blank' : '_self'} rel={targetBlank ? 'noopener noreferrer' : undefined}>
                        <span className="label">{title}</span>
                    </a>
                ) : (
                    <Link href={link}>
                        <span className="label">{title}</span>
                    </Link>
                )}
            </Button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        gap: 8px;
        border: none;
        transition: all 0.3s ease;
    }

    .button:hover {
        transform: translateY(-2px);
    }

    .svgIcon {
        opacity: 0;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }

    .button:hover .svgIcon {
        opacity: 1;
        transform: translateX(0);
    }
`;

export default ButtonSimple;
