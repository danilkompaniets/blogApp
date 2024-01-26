import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'

const BreadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "blog", link: "/blog" },
    { name: "Article Title", link: "/blog/1" },
]

const ArticleDetailPage = () => {
    return (
        <MainLayout>
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 '>
                <article className='flex-1 '>
                    <BreadCrumbs data={BreadCrumbsData} />
                    <img src={images.Post1Image} alt="post image" className='rounded-xl w-full' />
                    <Link to="/bolog?categoty=selectedCategory" className="text-primary text-sm font-roboto inline-blok mt-4 ">
                        EDUCATION
                    </Link>
                    <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard'>
                        Help Children get better education 
                    </h1>
                    <div className='mt-4 text-dark-soft'>
                        <p className='leading-7'>
                            
                        </p>
                    </div>
                </article>
            </section>
        </MainLayout>
    )
}

export default ArticleDetailPage