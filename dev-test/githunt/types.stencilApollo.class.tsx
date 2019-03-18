// tslint:disable
type Maybe<T> = T | null;
export type Scalars = {
          ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
        };

export type Comment = {
          id: Scalars['Int'],
  postedBy: User,
  createdAt: Scalars['Float'],
  content: Scalars['String'],
  repoName: Scalars['String'],
        };

export type Entry = {
          repository: Repository,
  postedBy: User,
  createdAt: Scalars['Float'],
  score: Scalars['Int'],
  hotScore: Scalars['Float'],
  comments: Array<Maybe<Comment>>,
  commentCount: Scalars['Int'],
  id: Scalars['Int'],
  vote: Vote,
        };


export type EntryCommentsArgs = {
          limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
        };

export enum FeedType {
          Hot = 'HOT',
  New = 'NEW',
  Top = 'TOP'
        }

export type Mutation = {
          submitRepository?: Maybe<Entry>,
  vote?: Maybe<Entry>,
  submitComment?: Maybe<Comment>,
        };


export type MutationSubmitRepositoryArgs = {
          repoFullName: Scalars['String']
        };


export type MutationVoteArgs = {
          repoFullName: Scalars['String'],
  type: VoteType
        };


export type MutationSubmitCommentArgs = {
          repoFullName: Scalars['String'],
  commentContent: Scalars['String']
        };

export type Query = {
          feed?: Maybe<Array<Maybe<Entry>>>,
  entry?: Maybe<Entry>,
  currentUser?: Maybe<User>,
        };


export type QueryFeedArgs = {
          type: FeedType,
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
        };


export type QueryEntryArgs = {
          repoFullName: Scalars['String']
        };

export type Repository = {
          name: Scalars['String'],
  full_name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  html_url: Scalars['String'],
  stargazers_count: Scalars['Int'],
  open_issues_count?: Maybe<Scalars['Int']>,
  owner?: Maybe<User>,
        };

export type Subscription = {
          commentAdded?: Maybe<Comment>,
        };


export type SubscriptionCommentAddedArgs = {
          repoFullName: Scalars['String']
        };

export type User = {
          login: Scalars['String'],
  avatar_url: Scalars['String'],
  html_url: Scalars['String'],
        };

export type Vote = {
          vote_value: Scalars['Int'],
        };

export enum VoteType {
          Up = 'UP',
  Down = 'DOWN',
  Cancel = 'CANCEL'
        }
export type OnCommentAddedSubscriptionVariables = {
          repoFullName: Scalars['String']
        };


export type OnCommentAddedSubscription = ({ __typename?: 'Subscription' } & { commentAdded: Maybe<({ __typename?: 'Comment' } & Pick<Comment, 'id' | 'createdAt' | 'content'> & { postedBy: ({ __typename?: 'User' } & Pick<User, 'login' | 'html_url'>) })> });

export type CommentQueryVariables = {
          repoFullName: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
        };


export type CommentQuery = ({ __typename?: 'Query' } & { currentUser: Maybe<({ __typename?: 'User' } & Pick<User, 'login' | 'html_url'>)>, entry: Maybe<({ __typename?: 'Entry' } & Pick<Entry, 'id' | 'createdAt' | 'commentCount'> & { postedBy: ({ __typename?: 'User' } & Pick<User, 'login' | 'html_url'>), comments: Array<Maybe<({ __typename?: 'Comment' } & CommentsPageCommentFragment)>>, repository: ({ __typename?: 'Repository' } & Pick<Repository, 'full_name' | 'html_url'> & (({ __typename?: 'Repository' } & Pick<Repository, 'description' | 'open_issues_count' | 'stargazers_count'>))) })> });

export type CommentsPageCommentFragment = ({ __typename?: 'Comment' } & Pick<Comment, 'id' | 'createdAt' | 'content'> & { postedBy: ({ __typename?: 'User' } & Pick<User, 'login' | 'html_url'>) });

export type CurrentUserForProfileQueryVariables = {};


export type CurrentUserForProfileQuery = ({ __typename?: 'Query' } & { currentUser: Maybe<({ __typename?: 'User' } & Pick<User, 'login' | 'avatar_url'>)> });

export type FeedEntryFragment = ({ __typename?: 'Entry' } & Pick<Entry, 'id' | 'commentCount'> & { repository: ({ __typename?: 'Repository' } & Pick<Repository, 'full_name' | 'html_url'> & { owner: Maybe<({ __typename?: 'User' } & Pick<User, 'avatar_url'>)> }) } & (VoteButtonsFragment & RepoInfoFragment));

export type FeedQueryVariables = {
          type: FeedType,
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
        };


export type FeedQuery = ({ __typename?: 'Query' } & { currentUser: Maybe<({ __typename?: 'User' } & Pick<User, 'login'>)>, feed: Maybe<Array<Maybe<({ __typename?: 'Entry' } & FeedEntryFragment)>>> });

export type SubmitRepositoryMutationVariables = {
          repoFullName: Scalars['String']
        };


export type SubmitRepositoryMutation = ({ __typename?: 'Mutation' } & { submitRepository: Maybe<({ __typename?: 'Entry' } & Pick<Entry, 'createdAt'>)> });

export type RepoInfoFragment = ({ __typename?: 'Entry' } & Pick<Entry, 'createdAt'> & { repository: ({ __typename?: 'Repository' } & Pick<Repository, 'description' | 'stargazers_count' | 'open_issues_count'>), postedBy: ({ __typename?: 'User' } & Pick<User, 'html_url' | 'login'>) });

export type SubmitCommentMutationVariables = {
          repoFullName: Scalars['String'],
  commentContent: Scalars['String']
        };


export type SubmitCommentMutation = ({ __typename?: 'Mutation' } & { submitComment: Maybe<({ __typename?: 'Comment' } & CommentsPageCommentFragment)> });

export type VoteButtonsFragment = ({ __typename?: 'Entry' } & Pick<Entry, 'score'> & { vote: ({ __typename?: 'Vote' } & Pick<Vote, 'vote_value'>) });

export type VoteMutationVariables = {
          repoFullName: Scalars['String'],
  type: VoteType
        };


export type VoteMutation = ({ __typename?: 'Mutation' } & { vote: Maybe<({ __typename?: 'Entry' } & Pick<Entry, 'score' | 'id'> & { vote: ({ __typename?: 'Vote' } & Pick<Vote, 'vote_value'>) })> });

import gql from 'graphql-tag';
import { Component } from '@stencil/core';
export const CommentsPageCommentFragmentDoc = gql`
    fragment CommentsPageComment on Comment {
  id
  postedBy {
    login
    html_url
  }
  createdAt
  content
}
    `;
export const VoteButtonsFragmentDoc = gql`
    fragment VoteButtons on Entry {
  score
  vote {
    vote_value
  }
}
    `;
export const RepoInfoFragmentDoc = gql`
    fragment RepoInfo on Entry {
  createdAt
  repository {
    description
    stargazers_count
    open_issues_count
  }
  postedBy {
    html_url
    login
  }
}
    `;
export const FeedEntryFragmentDoc = gql`
    fragment FeedEntry on Entry {
  id
  commentCount
  repository {
    full_name
    html_url
    owner {
      avatar_url
    }
  }
  ...VoteButtons
  ...RepoInfo
}
    ${VoteButtonsFragmentDoc}
${RepoInfoFragmentDoc}`;
export const OnCommentAddedDocument = gql`
    subscription onCommentAdded($repoFullName: String!) {
  commentAdded(repoFullName: $repoFullName) {
    id
    postedBy {
      login
      html_url
    }
    createdAt
    content
  }
}
    `;

            @Component({
                tag: 'apollo-on-comment-added'
            })
            export class OnCommentAddedComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-subscription/types').OnSubscriptionReadyFn<OnCommentAddedSubscription, OnCommentAddedSubscriptionVariables>;
                render() {
                    return <apollo-subscription subscription={ OnCommentAddedDocument } onReady={ this.onReady } />;
                }
            }
      
export const CommentDocument = gql`
    query Comment($repoFullName: String!, $limit: Int, $offset: Int) {
  currentUser {
    login
    html_url
  }
  entry(repoFullName: $repoFullName) {
    id
    postedBy {
      login
      html_url
    }
    createdAt
    comments(limit: $limit, offset: $offset) {
      ...CommentsPageComment
    }
    commentCount
    repository {
      full_name
      html_url
      ... on Repository {
        description
        open_issues_count
        stargazers_count
      }
    }
  }
}
    ${CommentsPageCommentFragmentDoc}`;

            @Component({
                tag: 'apollo-comment'
            })
            export class CommentComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-query/types').OnQueryReadyFn<CommentQuery, CommentQueryVariables>;
                render() {
                    return <apollo-query query={ CommentDocument } onReady={ this.onReady } />;
                }
            }
      
export const CurrentUserForProfileDocument = gql`
    query CurrentUserForProfile {
  currentUser {
    login
    avatar_url
  }
}
    `;

            @Component({
                tag: 'apollo-current-user-for-profile'
            })
            export class CurrentUserForProfileComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-query/types').OnQueryReadyFn<CurrentUserForProfileQuery, CurrentUserForProfileQueryVariables>;
                render() {
                    return <apollo-query query={ CurrentUserForProfileDocument } onReady={ this.onReady } />;
                }
            }
      
export const FeedDocument = gql`
    query Feed($type: FeedType!, $offset: Int, $limit: Int) {
  currentUser {
    login
  }
  feed(type: $type, offset: $offset, limit: $limit) {
    ...FeedEntry
  }
}
    ${FeedEntryFragmentDoc}`;

            @Component({
                tag: 'apollo-feed'
            })
            export class FeedComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-query/types').OnQueryReadyFn<FeedQuery, FeedQueryVariables>;
                render() {
                    return <apollo-query query={ FeedDocument } onReady={ this.onReady } />;
                }
            }
      
export const SubmitRepositoryDocument = gql`
    mutation submitRepository($repoFullName: String!) {
  submitRepository(repoFullName: $repoFullName) {
    createdAt
  }
}
    `;

            @Component({
                tag: 'apollo-submit-repository'
            })
            export class SubmitRepositoryComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-mutation/types').OnMutationReadyFn<SubmitRepositoryMutation, SubmitRepositoryMutationVariables>;
                render() {
                    return <apollo-mutation mutation={ SubmitRepositoryDocument } onReady={ this.onReady } />;
                }
            }
      
export const SubmitCommentDocument = gql`
    mutation submitComment($repoFullName: String!, $commentContent: String!) {
  submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {
    ...CommentsPageComment
  }
}
    ${CommentsPageCommentFragmentDoc}`;

            @Component({
                tag: 'apollo-submit-comment'
            })
            export class SubmitCommentComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-mutation/types').OnMutationReadyFn<SubmitCommentMutation, SubmitCommentMutationVariables>;
                render() {
                    return <apollo-mutation mutation={ SubmitCommentDocument } onReady={ this.onReady } />;
                }
            }
      
export const VoteDocument = gql`
    mutation vote($repoFullName: String!, $type: VoteType!) {
  vote(repoFullName: $repoFullName, type: $type) {
    score
    id
    vote {
      vote_value
    }
  }
}
    `;

            @Component({
                tag: 'apollo-vote'
            })
            export class VoteComponent {
                @Prop() onReady: import('stencil-apollo/dist/types/components/apollo-mutation/types').OnMutationReadyFn<VoteMutation, VoteMutationVariables>;
                render() {
                    return <apollo-mutation mutation={ VoteDocument } onReady={ this.onReady } />;
                }
            }
      