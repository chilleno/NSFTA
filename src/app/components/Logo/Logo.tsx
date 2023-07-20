const classes = {
    main: "xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm",
    textDiv: "flex flex-row justify-center content-center",
    leftStar: "h-[36px] w-[28px] absolute mr-[350px] mt-16 animate-[wiggle_.5s_ease-in-out_infinite]",
    title: "h-[193px] w-[387px] animate-[wiggle_10s_ease-in-out_infinite]",
    rightStar: "h-[36px] w-[28px] absolute mt-5 ml-[330px] animate-[wiggle_.5s_ease-in-out_infinite]",
    imgDiv: "flex flex-row xl:gap-20 lg:gap-20 md:gap-20 sm:gap-10 mt-4 justify-center content-center",
    imgClaudio: "xl:h-[198px] lg:h-[198px] md:h-[198px] sm:h-[160px] xl:w-[169px] lg:w-[169px] md:w-[169px] sm:w-[120px] animate-[wiggle_3s_ease-in-out_infinite]",
    imgLucho: "xl:h-[205px] lg:h-[205px] md:h-[205px] sm:h-[160px] xl:w-[170px] lg:w-[170px] md:w-[170px] sm:w-[120px] animate-[wiggle_3s_ease-in-out_infinite]",
};

export default function Logo() {
    return (
        <div className={classes.main}>
            <div className={classes.textDiv}>
                <img
                    className={classes.leftStar}
                    src="/logo/star.png" />
                <img
                    className={classes.title}
                    src="/logo/title.png" />
                <img
                    className={classes.rightStar}
                    src="/logo/star.png" />
            </div>
            <div className={classes.imgDiv}>
                <img
                    className={classes.imgClaudio}
                    src="/logo/claudio.png" />
                <img
                    className={classes.imgLucho}
                    src="/logo/lucho.png" />
            </div>
        </div>
    );
}