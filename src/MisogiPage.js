import React, { useEffect } from 'react';

const TITLE = 'My Misogi Challenge (2026)';

// Date written. Edit freely; it isn't tied to when the page is published.
const DATE = 'November 10, 2026';

// One string per paragraph.
const PARAGRAPHS = [
  <>The Misogi Challenge is an annual personal growth practice that derives its name from <em>misogi</em>, a traditional Japanese Shinto purification ritual where people would stand under freezing waterfalls to cleanse the body and mind. The term has been adapted in modern Western culture to describe a monumental test of resilience, to attempt to accomplish something that may be impossible. The unofficial rule is that the task must be so difficult there’s a 50% chance that you succeed.</>,
  `Up until April, running the 2026 Big Sur marathon was my Misogi Challenge (I used to hate running). Now it is a 50km ultramarathon with 5400 feet of elevation gain in December.`,
  `I started this journey in my spring quarter of senior year at UCLA in April 2025. My best friend and roommate Emma suggested we run a half marathon with two of our other roommates the week before finals. As someone who would dread the weekly mile in middle school PE and tolerated short sprints, I was hesitant. However, the motto of senior year that we threw around at nearly every function for any activity to garner participation was “college is only four years!” or CIOFY!! I knew I could run a mile so I said fuck it. I can train for a half marathon.`,
  `I began training with a ChatGPT generated plan, but it was haphazardly executed because of our senior trip to Vegas, Coachella, and more last-hurrah events that were unproductive for race day (although very nurturing to my soul). After painfully finishing the half, I knew I one day wanted to do a full marathon.`,
  `Fast forward a few months to fall of 2025, my friend Isaac told me about how he was training for an Ironman - super impressive. I vividly remember texting him that I wanted to eventually do a marathon as it was on my bucket list. He suggested we both apply for the April 2026 Big Sur marathon that admitted runners in a lottery system. The year before he had not gotten the lottery, so we expected the odds of getting chosen were low. I applied mostly because I felt good about signing up for the race with the unlikely probability of actually running.`,
  `Lo and behold the day the lottery results were announced, we were racing.`,
  `Leading up to Big Sur was erratic. Two months before the race I got sick, and three weeks before the race I got the worst food poisoning of my life in Portugal (alone). That week was supposed to be the biggest ramp in my training block, which I was unable to complete as I had been puking, among other things, for 24 hours straight. This setback had two implications: I no longer had time to taper and my longest run would only be 15 miles before the 26.2.`,
  `It was arguably unsafe to decide to race, especially since the course had 2200 feet of elevation gain (for context, the notoriously hilly SF marathon has 1700 feet of gain). I also happened to wake up the day before the race at 7 am with a cheeky sore throat and runny nose. After overdosing myself on vitamin C, D3, ginger shots, sambucus, and raw garlic, I pulled up race morning and (very slowly) did the thing.`,
  `Surprisingly, I never hit the wall or felt deeply exhausted during the race. The whole race I jogged waiting for shit to hit the fan, for my body to give out. But it never did. As I approached the finish line, I felt like I could keep running. If the organizers moved the goal post back a couple miles I could have continued.`,
  `For that reason, in July this year I independently decided I wanted to do an ultramarathon. An ultramarathon is any race longer than a marathon. I reasoned if I could show up to Big Sur with a cold and only a 15 miler under my belt and finish it without hitting the wall, I could train up to a 50km ultra.`,
  `Before I decided to sign up for my ultra I hesitated and thought maybe I should wait till next year to do this. I could do one big thing, one Misogi Challenge a year. My marathon was enough, right?`,
  `Why, though? Why wait another year to do something big and seemingly impossible? Why can’t we start the impossible now?`,
  `I strongly resonate with the Misogi Challenge because I derive satisfaction pursuing the extremes of specific skills and endeavors. A marathon is a good one for running. The human body’s natural glycogen stores deplete around mile 18-20, any distance more is excruciating to the body and a true test. Most runners don’t purely love running, they often have a love-hate relationship. Love because the feeling of pushing yourself to new limits is addicting, it’s narcissistic. Hate because it’s physically painful and you often contemplate if your time could be spent in other better ways. But in this tension, this suffering, you reach places and conversations with yourself that you would never have had otherwise. You become more optimistic and open-minded because your ceiling for tolerance and your baseline gratitude for life increases. I believe suffering is necessary to find and become the best version of yourself. Running is just one way to condition yourself to suffering.`,
  `So here I am one and a half years after training for my first half marathon, now training for an ultramarathon in December. Little did I know that one yes to Emma would lead to a much longer journey to a new love and attitude toward life. Cheers to that.`,
];

function MisogiPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <article className="writing">
      <a href="#/" className="writing-back">← back</a>
      <h1 className="writing-title">{TITLE}</h1>
      <p className="writing-date">{DATE}</p>
      {PARAGRAPHS.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </article>
  );
}

export default MisogiPage;
