
const GoogleMap = () => {
    
    return (
        <div className="relative mt-12 h-96 w-full">
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.841887548517!2d104.9332000746112!3d11.55568288864444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513257a11c79%3A0x33aecf5eed3669db!2sBuddhist%20Institute!5e1!3m2!1sen!2skh!4v1758177810040!5m2!1sen!2skh" width="600" height="450" style="border:0;" allowfullscreen='
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
