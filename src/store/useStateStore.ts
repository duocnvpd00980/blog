import _ from 'lodash'
import { useBlogStore } from './useBlogStore'
import { IBlog } from '@/services/blogService'

export interface IDocument {
  data: IBlog[]
  ids: string[]
}
export type ICollection = 'blog'

type Store = (get: () => void, set: (document: IDocument) => void) => void

export const useStateStore = (collection: ICollection, callback: Store) => {
  const { setState, getState } = useBlogStore
  const documents = getState()
  const documentStore = documents[collection]
  return callback(
    () => documentStore,
    (document) => {
      const equal = _.isEqual(document, documentStore)
      let data: IBlog[] = document.data
      let ids: string[] = document.ids
      if (equal) return
      if (
        !Array.isArray(data) ||
        !data.some((doc: IBlog) => doc.id === document.data[0].id)
      ) {
        data = [...documentStore.data, ...document.data]
        ids = [...documentStore.ids, ...document.ids]
      }
      setState({
        [collection]: { data, ids },
      })
    },
  )
}