import * as React from 'react';

export function containerStyle(width, height) {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: height.toString().concat("%"),
    width: width.toString().concat("%")
  }
};