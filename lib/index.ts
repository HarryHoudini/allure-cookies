import {AllureReporterExtensions} from "./allureReporterExtensions";
import {GherkinHelpers} from "./gherkinHelpers";

export const addArgument = AllureReporterExtensions.addArgument;
export const addDescription = AllureReporterExtensions.addDescription;
export const addEnvironment = AllureReporterExtensions.addEnvironment;
export const attachScreenshot = AllureReporterExtensions.attachScreenshot;
export const addFeature = AllureReporterExtensions.addFeature;
export const addStory = AllureReporterExtensions.addStory;

export const createAttachment = AllureReporterExtensions.createAttachment;
export const setScreenshotProvider = AllureReporterExtensions.setScreenshotProvider;
export const getJasmineAllureReporter = AllureReporterExtensions.getJasmineAllureReporter;

export const Step = AllureReporterExtensions.Step;
export const ScreenedStep = AllureReporterExtensions.ScreenedStep;
export const Heading = AllureReporterExtensions.Heading;
export const Gherkin = AllureReporterExtensions.Gherkin;

export const GIVEN = GherkinHelpers.GIVEN;
export const WHEN = GherkinHelpers.WHEN;
export const THEN = GherkinHelpers.THEN;
export const AND = GherkinHelpers.AND;
