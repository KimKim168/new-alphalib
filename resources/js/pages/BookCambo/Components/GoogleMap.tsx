const GoogleMap = ({ google_map_embed = '' }) => {
    if (!google_map_embed) return null;
    return (
        <div className="relative mt-12 h-96 w-full">
            <iframe
                src={google_map_embed}
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
