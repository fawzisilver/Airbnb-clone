"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type CounterInputProps = {
	detail: string;
	defaultValue?: number;
};

function CounterInput({ detail, defaultValue }: CounterInputProps) {
	const [count, setCount] = useState(defaultValue || 0);

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrementCount = () => {
		setCount((prevCount) => {
			if (prevCount > 0) {
				return prevCount - 1;
			} else {
				return prevCount;
			}
		});
	};

	return (
		<Card className="mb-4">
			{/** input */}
			<input type="hidden" name={detail} value={count} />
			<CardHeader className="flex flex-col gap-y-5">
				<div className="flex items-center justify-between flex-wrap">
					<div className="flex flex-col">
						<h2 className="font-semibold capitalize">{detail}</h2>
						<p className="text-muted-foreground text-sm">
							Specify the number of {detail}
						</p>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="outline" size="icon" onClick={decrementCount}>
							<LuMinus className="w-5 h-5 text-primary" />
						</Button>
						<span className="text-xl font-bold w-5 text-center">{count}</span>
						<Button variant="outline" size="icon" onClick={incrementCount}>
							<LuPlus className="w-5 h-5 text-primary" />
						</Button>
					</div>
				</div>
			</CardHeader>
		</Card>
	);
}

export default CounterInput;
