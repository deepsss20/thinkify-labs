import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const emailApi = createApi({
    reducerPath:"email",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://flipkart-email-mock.now.sh"
    }),
    endpoints: (builder)=>{
        return(

            {
                getEmailList: builder.query({
                    query:(page)=> `/?page=${page}`
                }),
                getEmailBody: builder.query({
                    query:(paarms)=> `/?id=${paarms}`
                })
            }
        )
    },

})

export const {useGetEmailListQuery, useGetEmailBodyQuery} = emailApi