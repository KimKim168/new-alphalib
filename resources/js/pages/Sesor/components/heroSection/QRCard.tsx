const QRCard = ({ title, qr, store, link }:any) => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-center font-manrope-semi-bold text-[10px] xl:text-[12px]">{title}</p>
            <div className="flex aspect-square w-30 flex-col gap-1.5 xl:w-32 xl:gap-[6px]">
                <div className="rounded-sm border border-[#F3AB1C] p-1">
                    <img src={qr} alt={`${title} QR`} className="h-full w-full rounded-[2px] object-cover" />
                </div>

                <a href={link}>
                    <img src={store} alt={`${title} Store`} className="w-full rounded-[2px] border object-cover xl:h-9 xl:rounded-sm" />
                </a>
            </div>
        </div>
    );
};

export default QRCard;
