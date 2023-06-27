import { useState, useRef, useEffect, useCallback, useContext } from "react";
import EditorContext from "@/context/EditorContext";
import colors from "@/theme/colors";
import Label from "../label";
import styled from "styled-components";
import { Graphic } from "@/lib/types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const OptionsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid ${colors.text.quarternary}40;
`;

const Option = styled.button`
  all: unset;
  padding: 0 10px;
  max-width: auto;
  border-radius: 30px;
  cursor: pointer;
  z-index: 2;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const Indicator = styled.span<{ width: number; left: number }>`
  position: absolute;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  border-radius: 30px;
  height: 80%;
  background: ${colors.text.quarternary}60;
  transition: 300ms ease-out;
  z-index: 1;
`;

export default function Customisation() {
    const options = [
        {
            id: "blurred",
            label: "Blur"
        },
        {
            id: "flow-green-head",
            label: "Flow"
        },
        {
            id: "grid",
            label: "Grid"
        },
        {
            id: "rectangles",
            label: "Rectangles"
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0);
    const { setGraphic } = useContext(EditorContext)!;

    const handleIndicatorUpdate = useCallback(() => {
        if (containerRef.current) {
            const activeOption = containerRef.current.children[activeIndex] as HTMLElement;

            if (activeOption) {
                const optionRect = activeOption.getBoundingClientRect();
                setIndicatorWidth(optionRect.width);
                setIndicatorLeft(optionRect.left - containerRef.current.getBoundingClientRect().left);
            }
        }
    }, [activeIndex]);

    useEffect(() => {
        handleIndicatorUpdate();
    }, [handleIndicatorUpdate]);

    return (
        <Container role="radio" aria-roledescription="Choose the theme for your card">
            <Label>Choose your theme</Label>

            <OptionsContainer onLoad={handleIndicatorUpdate} ref={containerRef}>
                {options.map((option, index) => (
                    <Option
                        role="option"
                        disabled={option.label === "Blur"}
                        key={option.id}
                        tabIndex={0}
                        onClick={() => {
                            setActiveIndex(index);
                            setGraphic(option.id as Graphic);
                        }}>
                        {option.label}
                    </Option>
                ))}

                <Indicator width={indicatorWidth} left={indicatorLeft} />
            </OptionsContainer>
        </Container>
    );
}
