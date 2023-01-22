
import CareImg from "../assets/images/customer-care.jfif";
import FAQCard from "./FAQCard";
const questions = [
  {
    id: 1,
    header: "How can I get started?",
    text: " Lörem ipsum duteskade bes, autode jonyledes. Gögt fartad orar sorade serieotrohet. Böliga amonde.",
  },
  {
    id: 2,
    header: "What is interest rate?",
    text: " Lörem ipsum duteskade bes, autode jonyledes. Gögt fartad orar sorade serieotrohet. Böliga amonde.",
  },
  {
    id: 3,
    header: "Is there a free plan?",
    text: " Lörem ipsum duteskade bes, autode jonyledes. Gögt fartad orar sorade serieotrohet. Böliga amonde.",
  },

];

const FAQs = () => {
  
  return (
    <section className="min-h-[100vh] px-16 lg:px-40 flex flex-col items-center justify-center bg-secondaryColor ">
      <h1 className="text-4xl font-bold  mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="w-4/5 text-2xl font-medium mb-4 text-center">
        Below are some of the most asked questions by sellers and customers. You
        will find more on our FAQs page{" "}
      </p>
      <div className="flex justify-between items-center w-full gap-12 pt-8">
        <div className="flex-1 h-[450px]">
          <img src={CareImg} alt="customer care" className="w-[600px] h-full" />
        </div>
        {/* Questions Con */}
        <div className="flex-1 ">
          {questions.map((item) => (
            <FAQCard
              key={item.id}
              text={item.text}
              header={item.header}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
