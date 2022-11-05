import { ComponentMeta, ComponentStory } from '@storybook/react'

import Home from './page'

export default {
  title: 'app/home',
  component: Home
} as ComponentMeta<typeof Home>

export const HomePage: ComponentStory<typeof Home> = () => <Home />
