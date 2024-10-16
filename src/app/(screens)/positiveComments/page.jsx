"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

export default function Page() {
  const [positiveCommentsData, setPositiveCommentsData] = useState(null);

  useEffect(() => {
    const positiveComments = JSON.parse(
      localStorage.getItem("positiveComments")
    );
    if (positiveComments) {
      setPositiveCommentsData(positiveComments);
    } else {
      setPositiveCommentsData([]);
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center pb-10 bg-[#eee] dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-[95%] sm:w-[80%] lg:w-1/2 flex justify-center items-center mt-20 mb-20">
        {positiveCommentsData === null ? (
          <div className="w-full mt-4">
            <h2 className="uppercase font-bold text-3xl md:text-5xl text-center text-neutral-800 dark:text-neutral-200">
              Loading...
            </h2>
          </div>
        ) : positiveCommentsData.length === 0 ? (
          <div className="w-full mt-4">
            <h2 className="uppercase font-bold text-3xl md:text-5xl text-center text-neutral-800 dark:text-neutral-200">
              No Positive Comments
            </h2>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Positive Comments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positiveCommentsData.map((comments, id) => (
                <TableRow key={id}>
                  <TableCell>{comments.author}</TableCell>
                  <TableCell>{comments.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
