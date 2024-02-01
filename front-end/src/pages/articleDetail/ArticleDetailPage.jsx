import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SugesstedPosts from "./container/SugesstedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";

const BreadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "blog", link: "/blog" },
  { name: "Article Title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "",
  },
  {
    _id: "4 ",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex lg:flex-row lg:gap-x-5 flex-col px-5 py-5 ">
        <article className="flex-1 ">
          <BreadCrumbs data={BreadCrumbsData} />
          <img
            src={images.Post1Image}
            alt="post image"
            className="rounded-xl w-full"
          />
          <Link
            to="/bolog?categoty=selectedCategory"
            className="text-primary text-sm font-roboto block  mt-4 md:text-base  lg:items-start   "
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help Children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nis! nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. n egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
          <CommentsContainer className="mt-10" LogginedUserId={"a"} />
        </article>
        <div className="flex flex-col gap-y-6 ">
          <SugesstedPosts
            posts={postsData}
            header={"Latest Article"}
            tags={tagsData}
            className={"mt-8 lg:mt-0 lg:max-w-xs lg:h-fit  "}
          />
          <div className="mt-7 ">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialShareButtons
              url={encodeURI(
                `https://www.youtube.com/watch?v=EXpUq42ff8U&list=PLhaS1k1mPiCO878vo-9xFJAlUfcz9dMv2&index=11`
              )}
              title={encodeURIComponent("MERN stack blog app")}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
