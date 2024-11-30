import React, { ElementType, ReactNode } from "react"

type Props = { 
    isLoading?: boolean,
    hasError?: boolean,
    LoadingContent?: ElementType
    children?: ReactNode
}

const Loading = ({ isLoading = false, hasError = false, LoadingContent, children }: Props) => {
    if (isLoading) {
        return LoadingContent ? <LoadingContent /> : null
    }

    if (hasError) {
        return null
    }

    return children
}

export default Loading