/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import type { FC } from 'react'
import React from 'react'
import { SWRConfig } from 'swr'
import { ComponentsProvider } from '@looker/components'
import type { Looker40SDK } from '@looker/sdk'
import { SDKContext } from '../SDKContext'
import type { DataStore } from '../hooks'
import { DataState } from '../hooks'
import { mockSDKWithListeners } from '.'

type ContextWrapperProps = {
  initialState?: DataStore
}

export const ContextWrapper: FC<ContextWrapperProps> = ({
  children,
  initialState,
}) => {
  return (
    <ComponentsProvider>
      <SWRConfig value={{ provider: () => new Map() }}>
        <SDKContext.Provider value={mockSDKWithListeners as Looker40SDK}>
          <DataState.Provider initialState={initialState}>
            {children}
          </DataState.Provider>
        </SDKContext.Provider>
      </SWRConfig>
    </ComponentsProvider>
  )
}