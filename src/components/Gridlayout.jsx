import { Grid, Stack, Typography } from "@mui/material"

export const Gridlayout = ({ data, type }) => {
  return (
    <Grid container>
      {
        type == 'head'
          ? data.map((item, key) => (
            <Grid xs={1.3} item key={key}>
              <Stack direction='row' spacing={1}>
                {item.icon ? <item.icon /> : ''}
                <Typography>{item.label}</Typography>
              </Stack>
            </Grid>
          ))
          :
          data.map((item) =>
          (
            item.map((vaal, key) => (
              <Grid xs={1.3} item key={vaal}>
                <Stack direction='row' pl={2} spacing={1}>
                  <Typography>{vaal}</Typography>
                </Stack>
              </Grid>
            ))
          )
          )}
    </Grid>
  )
}
