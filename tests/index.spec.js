/* eslint-env node, mocha */
import {expect} from 'chai'
import module from '../src/index.js'

describe('static-data', () => {
  it('does nothing', () => {
    expect(module).to.be.a('string')
  })
})
