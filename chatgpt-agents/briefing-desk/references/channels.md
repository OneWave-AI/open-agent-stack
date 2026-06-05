# Channels

Where Briefing Desk reads from and delivers to. Edit this file to change routing; no prompt change needed.

## Slack channels to read

Scanned each run for messages touching active topics.

- #intel
- #competitors
- #product-updates

## Default delivery channel

Where scheduled briefings post when Slack is the delivery channel.

- #briefings  (set SLACK_DEFAULT_CHANNEL_ID in .env to this channel's ID)

## Email delivery

- Deliver to: the address in BRIEFING_DELIVER_TO (.env)
- Send from: the address in BRIEFING_FROM_ADDRESS (.env)

## On-demand routing

For on-demand runs, the agent replies through the channel that triggered it (email reply, or Slack thread under the triggering message), overriding the defaults above.
