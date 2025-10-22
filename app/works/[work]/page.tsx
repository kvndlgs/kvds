// app/works/[work]/page.tsx
import React from 'react';

const CaseStudyPage = ({ params }: { params: { work: string } }) => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-[#4D4D4D] mb-12">
        Case Study: {params.work.replace(/-/g, ' ')}
      </h1>
      <p className="text-center text-gray-600">
        This is a placeholder for the case study of {params.work.replace(/-/g, ' ')}.
      </p>
    </div>
  );
};

export default CaseStudyPage;
