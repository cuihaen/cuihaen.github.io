import styled from '@emotion/styled'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, { useInfiniteScrollType,} from 'hooks/useInfiniteScroll'
import PostItem from 'components/Main/PostItem'
import React, { FunctionComponent } from 'react'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-gap: 20px;
//grid-template-columns: 1fr;
const PostListWrapper = styled.div`
 
  width: 960px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 1024px) {
   
    width: 95%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList