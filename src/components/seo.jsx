import React from "react"

export const SEO = ({ title, children }) => {

  const seo = {
    title: title || 'Home',
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait"></meta>
      {children}
    </>
  )
}