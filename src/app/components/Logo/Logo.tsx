export default function Logo() {
    return (
        <div>
            <div className='flex flex-row justify-center content-center'>
                <img
                    className='h-[36px] w-[28px] absolute mr-[350px] mt-16 animate-[wiggle_.5s_ease-in-out_infinite]'
                    src="/logo/star.png" />
                <img
                    className='h-[193px] w-[387px] animate-[wiggle_10s_ease-in-out_infinite]'
                    src="/logo/title.png" />
                <img
                    className="h-[36px] w-[28px] absolute mt-5 ml-[330px] animate-[wiggle_.5s_ease-in-out_infinite]"
                    src="/logo/star.png" />
            </div>
            <div className='flex flex-row gap-20 mt-4 justify-center content-center'>
                <img
                    className="h-[198px] w-[169px] animate-[wiggle_3s_ease-in-out_infinite]"
                    src="/logo/claudio.png" />
                <img
                    className="h-[205px] w-[170px] animate-[wiggle_3s_ease-in-out_infinite]"
                    src="/logo/lucho.png" />
            </div>
        </div>
    );
}