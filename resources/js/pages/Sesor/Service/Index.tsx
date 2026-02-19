import SesorLayout from '../SesorLayout';
import CardBenefits from '../components/Card/CardBenefits';
import CardDeliver from '../components/Card/CardDeliver';
import CardProhibitedWithRestricted from '../components/Card/CardProhibitedWithRestricted';
import CardService from '../components/Card/CardService';
import InquiryLeadForm from '../components/Form/InquiryLeadForm';
import HeroBottom from '../components/heroSection/ServiceHero/HeroBottom';

const Index = () => {
    return (
        <SesorLayout>
            <CardService />
            <CardDeliver />
            <CardProhibitedWithRestricted />
            <InquiryLeadForm />
            <HeroBottom />
            <CardBenefits />
        </SesorLayout>
    );
};

export default Index;
