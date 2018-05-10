import { AllureReporterExtensions } from "./allureReporterExtensions";
import { GherkinHelpers } from "./gherkinHelpers";
export declare const addArgument: typeof AllureReporterExtensions.addArgument;
export declare const addDescription: typeof AllureReporterExtensions.addDescription;
export declare const addEnvironment: typeof AllureReporterExtensions.addEnvironment;
export declare const createAttachment: typeof AllureReporterExtensions.createAttachment;
export declare const attachScreenshot: typeof AllureReporterExtensions.attachScreenshot;
export declare const addFeature: typeof AllureReporterExtensions.addFeature;
export declare const addStory: typeof AllureReporterExtensions.addStory;
export declare const getJasmineAllureReporter: typeof AllureReporterExtensions.getJasmineAllureReporter;
export declare const setScreenshotProvider: typeof AllureReporterExtensions.setScreenshotProvider;
export declare const reportStepsWithTags: typeof AllureReporterExtensions.reportStepsWithTags;
export declare const Step: typeof AllureReporterExtensions.Step;
export declare const ScreenedStep: typeof AllureReporterExtensions.ScreenedStep;
export declare const Heading: typeof AllureReporterExtensions.Heading;
export declare const Gherkin: typeof AllureReporterExtensions.Gherkin;
export declare const GIVEN: typeof GherkinHelpers.GIVEN;
export declare const WHEN: typeof GherkinHelpers.WHEN;
export declare const THEN: typeof GherkinHelpers.THEN;
export declare const AND: typeof GherkinHelpers.AND;
export declare const runtime: {
    startstep(...descriptions: string[]): void;
    endstep(stepSuccess?: boolean): void;
};
