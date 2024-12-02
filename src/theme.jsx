export const GetDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode specific palette
         
        }
      : {
          // Dark mode specific palette
          
        }),
    }
})
