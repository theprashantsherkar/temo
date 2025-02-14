interface qnaProps {
    id: number;
    question: string;
    answer: string;
}

export const qnaList1: qnaProps[] = [
    {
        id: 1,
        question: "What is the benefit of participating?",
        answer: 'Participating in UnPlugged 2.0 provides an opportunity to enhance your technical skills, work on real-world problems, and showcase your innovative ideas. It’s also a chance to collaborate with like-minded peers while gaining practical experience'
    },
    {
        id: 2,
        question: 'Who can participate in this Hackathon? ',
        answer: 'The competition is open to students pursuing B.Tech, BE or any technical diploma courses.'
    },
    {
        id: 3,
        question: 'Wrong details are submitted in the registration form, how can they be corrected?',
        answer: 'Participants must ensure registration details are accurate as no changes will be allowed after submission'
    },

    {
        id: 4,
        question: "Will Food and wireless internet access be provided?",
        answer: "Yes, food and wireless internet access will be provided to all participants."
    },

]

export const qnaList2: qnaProps[] = [
    {
        id: 5,
        question: "What should teams carry to the Hackathon Venue?",
        answer: "Teams should bring their laptops, chargers, extension cords and personal essentials. A valid college ID for each team member is also mandatory for verification"
    },
    {
        id: 6,
        question: "Is it mandatory to form teams with all members from the same college?",
        answer: "Cross-college teams are allowed; it is not mandatory for all team members to be from the same college"
    },

    {
        id: 7,
        question: "Can deadlines be extended if required?",
        answer: "All deadlines are final, and no extensions will be granted under any circumstances."
    },

    {
        id: 8,
        question: "What is the required format for Round 1 PPT Submission ?",
        answer: "Submissions for Round 1 must be in PPT format only. PDFs or other formats will not be accepted. "
    }
];