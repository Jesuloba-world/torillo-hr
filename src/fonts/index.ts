import localFont from "next/font/local";

export const blackSans = localFont({
	src: [
		{
			path: "./blacksansregularwebfont.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./blacksanscondensedmediumwebfont.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./blacksanssemiboldwebfont.otf",
			weight: "600",
			style: "normal",
		},
	],
});
