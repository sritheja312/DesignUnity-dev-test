import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Router } from '@angular/router';
<<<<<<< Updated upstream
import { TitleService } from 'src/app/service/title.service';
import { MetaTagsService } from 'src/app/service/meta-tags.service';
=======

>>>>>>> Stashed changes

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  posts: any[] = [];
  categories: any[] = [];
  selectedCategory: number | null = null;
  currentPage: number = 1;
  postsPerPage: number = 6;
  loadMoreAmount: number = 3;
  isLoading = true;
  error: any;
<<<<<<< Updated upstream
  featuredBlog: any[] = [];
  activeSection = 'All';
  constructor(
    private postService: WordpressService,
    private router: Router,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {}
=======

  constructor(private postService: WordpressService, private router: Router) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.titleService.setPageTitle('Design Unity - Blogs');

    // Set meta tags
    this.metaTagsService.setDescription(
      `Check out Design Unity's latest blogs, news updates, product announcements,creator success stories, and more.`
    );
    this.metaTagsService.setKeywords('');
    this.loadCategories();
    this.loadPosts();
  }

  loadCategories(): void {
    this.postService.getCategories().subscribe({
      next: (data: any[]) => {
        this.featuredBlog = this.categories = data.filter(
          (item) => item.name === 'featured'
        );
        this.categories = this.categories = data.filter(
          (item) => item.name !== 'featured'
        );
        // this.categories = data;
        console.log('blogs-1', this.categories, this.featuredBlog);
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
    });
  }

  loadPosts(categoryId?: number): void {
    this.isLoading = true;
    this.postService.getPosts(categoryId).subscribe({
      next: (data) => {
        this.posts = data;
        console.log('blogs', this.posts);

        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
    });
  }

  filterByCategory(categoryName: string): void {
    if (categoryName === 'all') {
      this.loadPosts();
      this.activeSection = 'All';
      console.log('this.activeSection', this.activeSection);
      console.log('blogs', this.loadPosts());
    } else {
      const category = this.categories.find((c) => c.name === categoryName);
      if (category) {
        this.activeSection = categoryName;
        console.log('this.activeSection', this.activeSection);

        this.loadPosts(category.id);
      }
    }
  }
<<<<<<< Updated upstream
  loadBlog(post: any) {
    this.router.navigate(['/blogs', post.title.rendered]);
    localStorage.setItem('blogId', post.id);
=======
  
  navigateToPost(postId: number): void {
    this.router.navigate(['/blog', postId]);
>>>>>>> Stashed changes
  }

  /*
  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
      complete: () => {
        console.log('Posts fetch complete');
      }
    });
  }


  filteredCards = this.posts; // Initially show all cards
  visibleCardsCount: number = 3; // Show 3 items initially

  // Method to filter cards by category
  filterByCategory(category: string) {
    if (category === 'all') {
      this.filteredCards = this.posts;
    } else {
      this.filteredCards = this.posts.filter(item => item.category === category);
    }
    this.visibleCardsCount = 3; // Reset visible cards to 3 when a category is clicked
  }

  // Method to load more cards
  loadMore() {
    this.visibleCardsCount += 3; // Show 3 more cards when load more is clicked
  }
*/
}
