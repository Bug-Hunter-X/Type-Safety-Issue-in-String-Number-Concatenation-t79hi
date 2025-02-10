# TypeScript Type Safety Bug

This repository demonstrates a common type safety issue in TypeScript where type annotations don't prevent runtime errors due to implicit type coercion.  The `combine` function is incorrectly annotated; it concatenates a string and a number.  The solution demonstrates how to correctly handle such situations.