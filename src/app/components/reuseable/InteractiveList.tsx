"use client";

import { Reorder } from "framer-motion";
import { type FunctionComponent, useState, useEffect } from "react";
import { api } from "~/trpc/react";
import { Button } from "./Button";

interface Service {
  id: number;
  userId: string;
  title: string;
  price: number;
  description: string;
  displayPosition: number;
}

interface Faq {
  id: number;
  userId: string;
  question: string;
  answer: string;
  displayPosition: number;
}

interface InteractiveListProps {
  input: Service[] | Faq[];
  themeData: Record<string, { hex: string }>;
}

const InteractiveList: FunctionComponent<InteractiveListProps> = ({
  input,
  themeData,
}) => {
  const [items, setItems] = useState<Service[] | Faq[]>([]);
  const updateServices = api.service.updateDisplayPositions.useMutation();
  const updateFaqs = api.faqs.updateDisplayPositions.useMutation();

  useEffect(() => {
    const sortedServices = [...input].sort(
      (a, b) => a.displayPosition - b.displayPosition
    ) as Service[] | Faq[];
    setItems(sortedServices);
  }, [input]);

  const onReorder = (newItems: (Service | Faq)[]) => {
    const updatedItems = newItems.map((item, index) => ({
      ...item,
      displayPosition: index,
    })) as Service[] | Faq[];

    setItems(updatedItems);
  };

  const updatePosition = (updateArray: Service[] | Faq[]) => {
    if (updateArray[0] === undefined) return null;
    if ("title" in updateArray[0]) {
      updateServices.mutate(updateArray as Service[]);
    } else {
      updateFaqs.mutate(updateArray as Faq[]);
    }
  };

  return (
    <div>
      <Reorder.Group axis="y" values={items} onReorder={onReorder}>
        {items.map((item) => (
          <Reorder.Item
            style={{ backgroundColor: themeData.cardBackground?.hex }}
            className="m-2 rounded-lg px-4 py-2"
            key={item.id}
            value={item}
          >
            {"title" in item ? item.title : item.question}
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <Button
        onClick={() => {
          updatePosition(items);
        }}
        text="Update"
      />
    </div>
  );
};

export default InteractiveList;
