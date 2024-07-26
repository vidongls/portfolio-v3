import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
	useGSAP,
	Flip,
	ScrollTrigger,
	Observer,
	ScrollToPlugin,
	Draggable,
	MotionPathPlugin,
	EaselPlugin,
	PixiPlugin,
	TextPlugin,
	RoughEase,
	ExpoScaleEase,
	SlowMo,
	CustomEase
);

export * from "gsap";
export * from "@gsap/react";
export * from "gsap/EasePack";
export * from "gsap/ScrollTrigger";
export * from "gsap/Observer";
export * from "gsap/ScrollToPlugin";
export * from "gsap/Draggable";
export * from "gsap/MotionPathPlugin";
export * from "gsap/EaselPlugin";
export * from "gsap/PixiPlugin";
export * from "gsap/TextPlugin";
