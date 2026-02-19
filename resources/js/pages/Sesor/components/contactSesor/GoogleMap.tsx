
const GoogleMap = () => {
    
    return (
        <div className="relative aspect-video w-full">
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.12303494868!2d104.88442399999997!3d11.581272000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510060ee634d%3A0xb86516d6bef33cf3!2sSesor%20Express!5e0!3m2!1sen!2skh!4v1759306842536!5m2!1sen!2skh" width="600" height="450" style="border:0;" allowfullscreen="'
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 h-full w-full"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
