const Footer: React.FC = () => {
    return (
        <footer className="fixed z-50 bottom-0 left-0 w-full bg-gray-200 flex justify-between">
            <div className="mb-2 ml-2 text-right text-white border-white border-2 rounded-full">
                <a target="_blank" className="p-2" href="mailto:antonio@ticroom.cl"><b>Contactame c:</b></a>
            </div>
            <div className="mr-2 mb-2 text-right text-white border-white border-2 rounded-full">
                <a target="_blank" className="p-2" href="https://twitter.com/chill__eno"><b>Con ♥ por @chill__eno</b></a>
            </div>
        </footer>
    );
};

export default Footer;