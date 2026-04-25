# Web

## Route Structure

```
/                                    - Home Page
/about                               - About Page
/series                              - Series Listing Page
├── /:series_slug                    - Series Detail Page
│   ├── /books                       - Books Page
│   │   └── /:book_slug              - Book Detail Page
│   ├── /characters                  - Characters Page
│   │   └── /:character_slug         - Character Detail Page
│   ├── /families                    - Families Page
│   │   └── /:family_slug            - Family Detail Page
│   └── /graph                       - Family Graph Page
```
