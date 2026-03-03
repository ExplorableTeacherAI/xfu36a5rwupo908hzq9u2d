import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout, SplitLayout } from "@/components/layouts";
import { EditableParagraph } from "@/components/atoms/text/EditableParagraph";
import { EditableH2 } from "@/components/atoms/text/EditableHeadings";
import { InlineScrubbleNumber } from "@/components/atoms/text/InlineScrubbleNumber";
import { Cartesian2D } from "@/components/atoms/visual/Cartesian2D";
import { getVariableInfo, numberPropsFromDefinition } from "./variables";
import { useVar } from "@/stores";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

/**
 * ------------------------------------------------------------------
 * BLOCK CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using <Block> components.
 * 2. Use Layout components to organize your blocks.
 * 3. Add your blocks to the `blocks` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-BLOCK VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across blocks using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts (use only variables.ts in this file; same structure as exampleBlocks + exampleVariables)
 * 
 * USAGE IN BLOCKS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * // InlineScrubbleNumber (from variables.ts): getVariableInfo(name) + numberPropsFromDefinition(...)
 * <InlineScrubbleNumber varName="amplitude" {...numberPropsFromDefinition(getVariableInfo('amplitude'))} />
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. StackLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <StackLayout maxWidth="xl">
 *          <Block id="intro">...</Block>
 *      </StackLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Block id="left">...</Block>
 *          <Block id="right">...</Block>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Block id="item-1">...</Block>
 *          <Block id="item-2">...</Block>
 *          <Block id="item-3">...</Block>
 *      </GridLayout>
 * 
 * 4. ScrollytellingLayout
 *    - Best for: Narrative steps with a reactive sticky visualization.
 *    - Usage:
 *      <ScrollytellingLayout varName="scrollStep" visualPosition="right">
 *          <ScrollStep><Block id="step-0">...</Block></ScrollStep>
 *          <ScrollStep><Block id="step-1">...</Block></ScrollStep>
 *          <ScrollVisual><Block id="viz">...</Block></ScrollVisual>
 *      </ScrollytellingLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleBlocks.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const blocks: ReactElement[] = [
    <StackLayout key="layout-intro" maxWidth="xl">
        <Block id="block-intro" padding="md">
            <EditableParagraph id="para-intro" blockId="block-intro">
                Mathematics comes alive when students can touch it, change it, and see the consequences unfold before their eyes. Interactive learning transforms abstract symbols into living ideas — when a student drags a number and watches a graph reshape itself, they are not just observing mathematics, they are doing it. This hands-on discovery is what makes concepts stick and curiosity spark.
            </EditableParagraph>
        </Block>
    </StackLayout>,
    <StackLayout key="layout-exp-title" maxWidth="xl">
        <Block id="block-exp-title" padding="md">
            <EditableH2 id="h2-exp-title" blockId="block-exp-title">
                Exponential Growth: Watch Numbers Explode
            </EditableH2>
        </Block>
    </StackLayout>,
    <SplitLayout key="layout-exp-graph" ratio="1:1" gap="lg">
        <Block id="block-exp-text" padding="md">
            <EditableParagraph id="para-exp-text" blockId="block-exp-text">
                Exponential growth starts slow, then suddenly takes off. The function y = base^x grows faster and faster as x increases. Try changing the base below and watch how dramatically the curve changes shape.
            </EditableParagraph>
            <EditableParagraph id="para-exp-scrub" blockId="block-exp-text">
                With base{" "}
                <InlineScrubbleNumber
                    id="scrub-exp-base"
                    varName="expBase"
                    {...numberPropsFromDefinition(getVariableInfo('expBase'))}
                />
                , when x = 5, the value is already{" "}
                <ExpValue />.
                {" "}Notice how even small changes to the base create huge differences in the result!
            </EditableParagraph>
        </Block>
        <Block id="block-exp-viz" padding="md">
            <ExpGraph />
        </Block>
    </SplitLayout>,
    <StackLayout key="layout-1772505937191" maxWidth="xl">
        <Block id="block-1772505937191" padding="md">
            <EditableParagraph id="para-1772505937191" blockId="block-1772505937191">
                Learning by doing is at the heart of mathematical understanding. When students actively manipulate equations, construct geometric shapes, or experiment with numerical patterns, they build intuition that no amount of passive reading can provide. Each mistake becomes a teacher, each success a stepping stone. The act of doing — dragging, clicking, adjusting, predicting — transforms mathematics from a spectator sport into a playground of ideas where every learner is an explorer.
            </EditableParagraph>
        </Block>
    </StackLayout>,
    <StackLayout key="layout-1772506875245" maxWidth="xl">
        <Block id="block-1772506875245" padding="md">
            <EditableParagraph id="para-1772506875245" blockId="block-1772506875245">
                Mathematics was not invented — it was discovered, born from humanity's earliest attempts to make sense of the world. Ancient Babylonians tracked the stars and developed arithmetic over 4,000 years ago. The Egyptians measured their lands with geometry after each Nile flood. The Greeks transformed these practical tools into an art of pure reasoning, giving us proofs and theorems that still hold true today. From counting pebbles to exploring infinity, the story of mathematics is the story of human curiosity reaching beyond the obvious to uncover hidden patterns in nature.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];

// Helper component to display computed exponential value
function ExpValue() {
    const base = useVar('expBase', 2) as number;
    const value = Math.pow(base, 5);
    return (
        <span
            className="font-semibold"
            style={{ color: '#f97316' }}
        >
            {value.toFixed(1)}
        </span>
    );
}

// Helper component for the exponential graph
function ExpGraph() {
    const base = useVar('expBase', 2) as number;
    return (
        <Cartesian2D
            height={350}
            viewBox={{ x: [-1, 6], y: [-5, 50] }}
            plots={[
                {
                    type: "function",
                    fn: (x: number) => Math.pow(base, x),
                    color: "#f97316",
                    weight: 3,
                },
                {
                    type: "function",
                    fn: (x: number) => x,
                    color: "#94a3b8",
                    weight: 1,
                },
            ]}
        />
    );
}
