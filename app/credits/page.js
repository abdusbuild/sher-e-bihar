import PageHero from "../components/PageHero";
import { pageMeta } from "../data/seo";
import { restaurant } from "../data/site";

export const metadata = pageMeta({
  title: "Photo Credits",
  description: "Credits and licences for the stock dish photos used on the Hotel Sher-e-Bihar dining page.",
  path: "/credits",
});

// Credits for the stock dish photos on /dining. Their licences require the author and licence to be named,
// so /dining links here. Remove a dish's entry only when its photo is replaced with one of our own.
export default function Credits() {
  return (
    <>
      <PageHero title="Photo Credits" breadcrumb />
      <section className="section">
        <div className="wrap legal-body" style={{ maxWidth: 760 }}>
          <p>
            The photos of the hotel, rooms, restaurant and banquet hall on this website are our own. The dish photos on
            the Dining page are stock photos from Wikimedia Commons, shown for illustration. They have been resized and
            are used under the licences below.
          </p>
          <ul>
            {restaurant.dishes.map((d) => (
              <li key={d.title}>
                <a href={d.credit.page} target="_blank" rel="noopener noreferrer">
                  {d.title.split(" & ")[0]}
                </a>{" "}
                by {d.credit.by}, licensed under{" "}
                <a href={d.credit.licenceUrl} target="_blank" rel="noopener noreferrer">
                  {d.credit.licence}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
