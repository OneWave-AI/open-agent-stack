---
name: demo-video
description: Plan and capture the demo or launch video for the app you just shipped -- the beat sheet, the clean capture setup, and the narration -- so it shows the product working instead of narrating a tour. Use after shipping, when the app needs a video for a landing page, launch post, or client handoff.
---

# Demo Video

You shipped it and now something has to show it. The default result is a four-minute screen recording that opens with "so, first I'll log in" and loses everyone before the product does anything interesting.

The fix is a beat sheet before a single frame is captured. This skill plans and captures; rendering and editing belong to whatever video tooling the user already has.

## The shape

Length by purpose, and none of these are negotiable upward:

| Purpose | Length | Opens with |
|---|---|---|
| Landing page hero loop | 10-20s, silent, looping | The product mid-action, no UI chrome |
| Launch post / social | 30-60s | The result, then how |
| Full demo / client walkthrough | 90-150s | The problem in one sentence |

Silent-by-default for anything embedded on a page: it autoplays muted, so it must work with no audio. Captions if there are words.

## Workflow

1. **Name the one thing.** What single capability makes someone want this? The video shows that, well, and skips everything else. A demo covering six features communicates none of them. Everything that is not the one thing is a candidate for deletion, including login, settings, and navigation.
2. **Write the beat sheet before capturing.** Each beat gets one line of what is on screen and one line of what is said or shown. For a 60-second launch video that is roughly six beats:
   - **Hook (0-5s)** -- the result, or the problem stated in a sentence. Never a logo, never "hi, I'm going to show you". The first three seconds decide whether there is a fourth.
   - **Context (5-12s)** -- what this is and who it is for, once, plainly.
   - **The demo (12-45s)** -- the one thing, actually working. Real data, real latency or an honest cut, real output.
   - **Proof (45-52s)** -- the result on screen: the record created, the file produced, the time saved.
   - **Close (52-60s)** -- what to do next and where. One action.

   Read the beat sheet aloud against a timer before capturing. Overruns get cut here, where cutting is free.
3. **Prepare the app for the camera.** This is where most demo videos are lost:
   - Seed realistic data. Empty states and `test test test` make a product look unused; obviously fake names make it look like a mockup.
   - Clean browser: no bookmarks bar, no extensions, no other tabs, no notifications. Use a fresh profile.
   - Fixed window size at a 16:9 ratio, and set the zoom so text is readable at the size it will actually be watched -- usually 125-150%, because a 100% screenshot is illegible in a social feed.
   - Hide anything private: real customer names, emails, keys, account balances, internal URLs. Check the browser autocomplete dropdown, which is a classic leak.
   - Decide cursor treatment before starting. A visible click indicator helps; a wandering cursor does not.
4. **Capture in takes, not one pass.** One beat per take. A flubbed beat costs one retake instead of the whole video. Move deliberately -- slightly slower than feels natural, with a beat of stillness before and after each action, which is what gives the edit somewhere to cut. Never capture typing in real time; type short, and speed it up later.
5. **Handle the waiting honestly.** Real latency is the thing videos most often fake. Cut the wait, or speed it up visibly, but do not present a four-second load as instant. Overstating speed is the demo lie that gets noticed on day one of the trial.
6. **Narrate, or do not.** If there is voiceover, write it as speech and record it separately from the capture -- narrating live produces both worse audio and worse pacing. If there is no voiceover, on-screen text carries the beats: short, high contrast, on screen long enough to read twice at a glance.
7. **Verify where it will actually play.** Watch it muted. Watch it on a phone. Watch the first three seconds alone and ask whether they earn the fourth. Check that the poster frame -- the still shown before play -- is a good frame, because for many viewers it is the only frame.

## Rules

- Show the product working. A tour of the interface is not a demo; a task completed is.
- Never fake a result. No mocked-up output, no invented metrics, no screens that do not exist in the build. If a feature is not finished, it is not in the video.
- Cut the login. Cut the navigation. Cut the settings. Start where it gets interesting.
- No music bed that fights narration, and nothing that requires audio to make sense.
- If the video is a page hero, it must also work as a still, because that is what slow connections and reduced-motion users get.
- Keep the beat sheet and the source captures. The video will need a re-cut the moment the UI changes, and recapturing from nothing is the expensive path.

## Handing off to render

The beat sheet plus takes are the deliverable this skill produces. Rendering, captioning, and editing route to whatever the user runs -- their existing video tooling, an editor, or a hosted service. Do not invent a pipeline here; hand over the plan and the footage.
