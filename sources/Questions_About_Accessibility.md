# Can there be a difference between different countries and how they implement the EAA?

![[questions_about_accessibility.png]]
https://www.twobirds.com/en/insights/2024/global/european-accessibility-act#:~:text=The%20EAA%20provides%20the%20legislative,needs%20of%20persons%20with%20disabilities

# Do aria-labels/aria-names need to be translated for localisation? This might be needed when using screen readers but makes it harder for things like unit testing.
- This should be done for everything users will get in contact with, also for alt-texts.
- Add the right language code for screen readers < html lang = "fr ">

# Are there tools (like those that test performance that generate rapports that indicate how to make your website more accessible?)
Yes, these tools exist but they are not comprehensive. A good indicator is if you can navigate through your application with your keyboard.

# How good does the ally-eslint-plugin adhere to WCAG 2.0 and the Accessibility Act?