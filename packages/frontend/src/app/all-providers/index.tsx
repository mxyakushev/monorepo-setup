import { ComponentType, PropsWithChildren, ProviderProps, ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

type IProviderOrWithValue<T = any> = ComponentType<T> | [ComponentType<T>, T?]

export const combine =
  (providers: Array<IProviderOrWithValue>) =>
  ({ children }: PropsWithChildren<{ value?: unknown[] }>) =>
    providers.reduceRight<ReactElement<ProviderProps<unknown>>>((tree, ProviderOrWithValue) => {
      if (Array.isArray(ProviderOrWithValue)) {
        const [Provider, value] = ProviderOrWithValue
        return <Provider {...value}>{tree}</Provider>
      } else {
        return <ProviderOrWithValue>{tree}</ProviderOrWithValue>
      }
    }, children as ReactElement)
export const AllProviders = combine([[Router]])
