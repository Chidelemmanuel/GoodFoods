"use client";

import React from 'react';
import Image from 'next/image';

const foods = [
    { name: 'Fresh Salad Bowl', price: 'IDR 45.000', image: '/images/Group 299.png' },
    { name: 'Chicken Noodles', price: 'IDR 75.000', image: '/images/Group 299 (1).png' },
    { name: 'Smoothie Fruits', price: 'IDR 45.000', image: '/images/Group 299 (2).png' },
    { name: 'Hot Chicken Wings', price: 'IDR 45.000', image: '/images/Group 299 (3).png' },
];

const MostOrderedFood = () => {
    return (
        <div className="p-6 h-full overflow-hidden">
             <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800">Most Ordered Food</h3>
                <p className="mt-1 text-xs text-slate-400">Adipiscing elit, sed do eiusmod tempor</p>
            </div>
            
            <div className="flex flex-col">
                {foods.map((food, index) => (
                    <React.Fragment key={index}>
                        <div className="flex items-center justify-between group cursor-pointer py-4 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src={food.image}
                                        alt={food.name}
                                        fill
                                        className="object-cover scale-150 mix-blend-multiply"
                                    />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{food.name}</span>
                            </div>
                            <span className="text-xs font-medium text-slate-400">{food.price}</span>
                        </div>
                        {index < foods.length - 1 && (
                            <div className="h-px w-full bg-slate-100"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MostOrderedFood;
