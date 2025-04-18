Google Calendar Canceled Events Remover
========================================

This Chrome extension hides events in Google Calendar that start 
with ``"Canceled:"``. It works across all Google Calendar profiles 
(e.g. ``/u/0/``, ``/u/1/``, etc.), and is enabled by default. You can toggle 
the feature on and off via the extension popup.

Features
--------

- ✅ Automatically hides events with titles like ``"Canceled: Meeting with Bob"``
- ✅ Supports all Google Calendar views (Day, Week, Month)
- ✅ Uses MutationObserver for reliable dynamic updates
- ✅ Enabled by default
- ✅ Toggleable via the extension popup

Installation
------------

1. Clone or download this repository to your machine.
2. Open Chrome and go to ``chrome://extensions/``
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the folder containing this extension

Usage
-----

1. Navigate to `https://calendar.google.com`
2. Events starting with ``Canceled:`` will be automatically hidden
3. Click the extension icon in the toolbar to open the popup
4. Use the checkbox to enable or disable the filter

Structure
---------

- ``manifest.json``: Extension configuration
- ``content.js``: The script that hides canceled events
- ``background.js``: Injects configuration toggle state
- ``popup.html`` / ``popup.js``: Toggle UI


Customization
-------------

Open ``content.js`` and modify the selector logic. It currently looks for:

.. code-block:: js

   if (text.startsWith("Canceled:")) {
       eventChip.style.display = "none";
   }

Change ``"Canceled:"`` to match whatever prefix you like.

Contributing
------------

Pull requests are welcome! If you notice the DOM structure of Google Calendar 
has changed, feel free to submit a fix for the selectors.

License
-------

This work has been dedicated to the public domain under the Creative Commons 
Zero (CC0 1.0 Universal) license.

See: https://creativecommons.org/publicdomain/zero/1.0/
