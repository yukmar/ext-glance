# Purpose
Membuat extension dengan firebase 9

# To Do
- [x] Membuat project baru
- [ ] Login
      - [ ] Membuat file baru
      - [x] Inisiasi firebase
      - [ ] Membuat fungsi CRUD (password verification)
      - [ ] export and import them to background script.

# PROGRESS
## Basic Setup
1.  Membuat template webextensid dengan create-web-ext
(referensi: https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)
2.  Menambahkan git untuk version control, catatan.md untuk catatan project, yarn untuk package bundling
3.  Menambahkan parcel dan config parcel: yarn add -D parcel@next, yarn add -D @parcel/config-webextension@next
4.  Membuat .parcelrc dengan isi extends: "@parcel/config-webextension"
(referensi: https://v2.parceljs.org/recipes/web-extension/)

## WebExt Polyfill
5.  Menambahkan webextension-polyfill: yarn add -D webextension-polyfill
(referensi: https://github.com/mozilla/webextension-polyfill)

