from django.test import TestCase
from django.contrib.auth.models import User
from apps.reports.models import ReportType, PostReport, UserProfileReport
from apps.posts.models import Post
from apps.tags.models import Tag
import uuid


class ReportTypeTests(TestCase):
    """Test cases for ReportType model"""
    
    def test_report_type_creation(self):
        """Test creating a report type"""
        report_type = ReportType.objects.create(
            title='Spam',
            info='Spam content or behavior'
        )
        
        self.assertEqual(report_type.title, 'Spam')
        self.assertEqual(report_type.info, 'Spam content or behavior')
        self.assertIsNotNone(report_type.created_at)
        self.assertIsNotNone(report_type.updated_at)
    
    def test_report_type_str_representation(self):
        """Test the string representation of ReportType"""
        report_type = ReportType.objects.create(title='Harassment')
        self.assertEqual(str(report_type), 'Harassment')
    
    def test_report_type_verbose_names(self):
        """Test the verbose names for ReportType"""
        self.assertEqual(ReportType._meta.verbose_name, 'Report Type')
        self.assertEqual(ReportType._meta.verbose_name_plural, 'Report Types')
    
    def test_report_type_timestamps(self):
        """Test that ReportType has proper timestamps"""
        from django.utils import timezone
        
        report_type = ReportType.objects.create(title='Inappropriate Content')
        
        self.assertIsNotNone(report_type.created_at)
        self.assertIsNotNone(report_type.updated_at)
        
        # Test that created_at and updated_at are close for new objects
        self.assertAlmostEqual(
            report_type.created_at, 
            report_type.updated_at, 
            delta=timezone.timedelta(seconds=1)
        )


class PostReportTests(TestCase):
    """Test cases for PostReport model"""
    
    def setUp(self):
        # Create users
        self.reporter = User.objects.create_user(username='reporter', password='testpass123')
        self.author = User.objects.create_user(username='author', password='testpass123')
        
        # Create a report type
        self.report_type = ReportType.objects.create(
            title='Spam',
            info='Spam content'
        )
        
        # Create a tag
        self.tag = Tag.objects.create(name='test')
        
        # Create a post
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.author,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
    
    def test_post_report_creation(self):
        """Test creating a post report"""
        report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post,
            url='https://example.com/test-post',
            additional_info='This post contains spam'
        )
        
        self.assertEqual(report.reporter, self.reporter)
        self.assertEqual(report.report_type, self.report_type)
        self.assertEqual(report.post, self.post)
        self.assertEqual(report.url, 'https://example.com/test-post')
        self.assertEqual(report.additional_info, 'This post contains spam')
        self.assertEqual(report.status, PostReport.STATUS.INITIATED)
        self.assertIsNotNone(report.created_at)
        self.assertIsNotNone(report.updated_at)
    
    def test_post_report_str_representation(self):
        """Test the string representation of PostReport"""
        report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post
        )
        
        expected_str = f"Report: {self.author.username} by {self.reporter.username}"
        self.assertEqual(str(report), expected_str)
    
    def test_post_report_statuses(self):
        """Test different report statuses"""
        # Create reports with different statuses
        initiated_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post,
            status=PostReport.STATUS.INITIATED
        )
        
        verified_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post,
            status=PostReport.STATUS.VERIFIED
        )
        
        resolved_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post,
            status=PostReport.STATUS.RESOLVED
        )
        
        rejected_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post,
            status=PostReport.STATUS.REJECTED
        )
        
        redacted_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post,
            status=PostReport.STATUS.REDACTED
        )
        
        self.assertEqual(initiated_report.status, PostReport.STATUS.INITIATED)
        self.assertEqual(verified_report.status, PostReport.STATUS.VERIFIED)
        self.assertEqual(resolved_report.status, PostReport.STATUS.RESOLVED)
        self.assertEqual(rejected_report.status, PostReport.STATUS.REJECTED)
        self.assertEqual(redacted_report.status, PostReport.STATUS.REDACTED)
    
    def test_post_report_relationship(self):
        """Test the relationship between post and reports"""
        report1 = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post
        )
        
        report2 = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post
        )
        
        # Test that we can access reports through the post
        post_reports = self.post.reports.all()
        self.assertEqual(post_reports.count(), 2)
        self.assertIn(report1, post_reports)
        self.assertIn(report2, post_reports)
    
    def test_post_report_ordering(self):
        """Test that post reports are ordered by -created_at"""
        report1 = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post
        )
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        report2 = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            post=self.post
        )
        
        post_reports = PostReport.objects.all()
        self.assertEqual(post_reports.first(), report2)  # Most recent should be first
        self.assertEqual(post_reports.last(), report1)   # Oldest should be last


class UserProfileReportTests(TestCase):
    """Test cases for UserProfileReport model"""
    
    def setUp(self):
        # Create users
        self.reporter = User.objects.create_user(username='reporter', password='testpass123')
        self.reported_user = User.objects.create_user(username='reported', password='testpass123')
        
        # Create a report type
        self.report_type = ReportType.objects.create(
            title='Harassment',
            info='Harassing behavior'
        )
    
    def test_user_profile_report_creation(self):
        """Test creating a user profile report"""
        report = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user,
            url='https://example.com/profile',
            additional_info='This user is harassing others'
        )
        
        self.assertEqual(report.reporter, self.reporter)
        self.assertEqual(report.report_type, self.report_type)
        self.assertEqual(report.reported_user, self.reported_user)
        self.assertEqual(report.url, 'https://example.com/profile')
        self.assertEqual(report.additional_info, 'This user is harassing others')
        self.assertEqual(report.status, UserProfileReport.STATUS.INITIATED)
        self.assertIsNotNone(report.created_at)
        self.assertIsNotNone(report.updated_at)
    
    def test_user_profile_report_str_representation(self):
        """Test the string representation of UserProfileReport"""
        report = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user
        )
        
        expected_str = f"Report: {self.reported_user.username} by {self.reporter.username}"
        self.assertEqual(str(report), expected_str)
    
    def test_user_profile_report_statuses(self):
        """Test different report statuses"""
        # Create reports with different statuses
        initiated_report = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user,
            status=UserProfileReport.STATUS.INITIATED
        )
        
        verified_report = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user,
            status=UserProfileReport.STATUS.VERIFIED
        )
        
        self.assertEqual(initiated_report.status, UserProfileReport.STATUS.INITIATED)
        self.assertEqual(verified_report.status, UserProfileReport.STATUS.VERIFIED)
    
    def test_user_profile_report_relationship(self):
        """Test the relationship between user and reports"""
        report1 = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user
        )
        
        report2 = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user
        )
        
        # Test that we can access reports through the reported user
        user_reports = self.reported_user.reports.all()
        self.assertEqual(user_reports.count(), 2)
        self.assertIn(report1, user_reports)
        self.assertIn(report2, user_reports)
    
    def test_user_profile_report_ordering(self):
        """Test that user profile reports are ordered by -created_at"""
        report1 = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user
        )
        
        # Add a small delay
        import time
        time.sleep(0.01)
        
        report2 = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.report_type,
            reported_user=self.reported_user
        )
        
        user_reports = UserProfileReport.objects.all()
        self.assertEqual(user_reports.first(), report2)  # Most recent should be first
        self.assertEqual(user_reports.last(), report1)   # Oldest should be last


class ReportIntegrationTests(TestCase):
    """Integration tests for report models"""
    
    def setUp(self):
        # Create users
        self.reporter = User.objects.create_user(username='reporter', password='testpass123')
        self.author = User.objects.create_user(username='author', password='testpass123')
        self.reported_user = User.objects.create_user(username='reported', password='testpass123')
        
        # Create report types
        self.spam_type = ReportType.objects.create(
            title='Spam',
            info='Spam content or behavior'
        )
        
        self.harassment_type = ReportType.objects.create(
            title='Harassment',
            info='Harassing or abusive behavior'
        )
        
        # Create a tag
        self.tag = Tag.objects.create(name='test')
        
        # Create a post
        self.post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.author,
            uuid=uuid.uuid4()
        )
        self.post.tags.add(self.tag)
    
    def test_complete_reporting_workflow(self):
        """Test a complete reporting workflow"""
        # 1. Create post and user reports
        post_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.spam_type,
            post=self.post,
            url='https://example.com/test-post',
            additional_info='This post contains spam content',
            status=PostReport.STATUS.INITIATED
        )
        
        user_report = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.harassment_type,
            reported_user=self.reported_user,
            url='https://example.com/profile',
            additional_info='This user is harassing others',
            status=UserProfileReport.STATUS.INITIATED
        )
        
        # 2. Verify reports were created
        self.assertEqual(PostReport.objects.count(), 1)
        self.assertEqual(UserProfileReport.objects.count(), 1)
        
        # 3. Verify relationships
        self.assertEqual(self.post.reports.count(), 1)
        self.assertEqual(self.reported_user.reports.count(), 1)
        
        # 4. Update report statuses
        post_report.status = PostReport.STATUS.VERIFIED
        post_report.save()
        
        user_report.status = UserProfileReport.STATUS.REJECTED
        user_report.save()
        
        # 5. Verify status updates
        post_report.refresh_from_db()
        user_report.refresh_from_db()
        
        self.assertEqual(post_report.status, PostReport.STATUS.VERIFIED)
        self.assertEqual(user_report.status, UserProfileReport.STATUS.REJECTED)
        
        # 6. Verify timestamps on all models
        from django.utils import timezone
        
        for model_instance in [post_report, user_report, self.spam_type, self.harassment_type]:
            self.assertIsNotNone(model_instance.created_at)
            self.assertIsNotNone(model_instance.updated_at)
            self.assertAlmostEqual(
                model_instance.created_at, 
                model_instance.updated_at, 
                delta=timezone.timedelta(seconds=1)
            )
    
    def test_multiple_reports_on_same_post(self):
        """Test multiple reports on the same post"""
        user2 = User.objects.create_user(username='user2', password='testpass123')
        
        # Create multiple reports on the same post
        report1 = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.spam_type,
            post=self.post,
            status=PostReport.STATUS.INITIATED
        )
        
        report2 = PostReport.objects.create(
            reporter=user2,
            report_type=self.harassment_type,
            post=self.post,
            status=PostReport.STATUS.INITIATED
        )
        
        # Verify both reports exist
        self.assertEqual(PostReport.objects.count(), 2)
        self.assertEqual(self.post.reports.count(), 2)
        
        # Verify different reporters and report types
        self.assertEqual(report1.reporter, self.reporter)
        self.assertEqual(report1.report_type, self.spam_type)
        
        self.assertEqual(report2.reporter, user2)
        self.assertEqual(report2.report_type, self.harassment_type)
    
    def test_report_deletion_cascades(self):
        """Test that report deletion cascades properly"""
        # Create a post report
        post_report = PostReport.objects.create(
            reporter=self.reporter,
            report_type=self.spam_type,
            post=self.post
        )
        
        # Create a user report
        user_report = UserProfileReport.objects.create(
            reporter=self.reporter,
            report_type=self.harassment_type,
            reported_user=self.reported_user
        )
        
        # Verify reports exist
        self.assertEqual(PostReport.objects.count(), 1)
        self.assertEqual(UserProfileReport.objects.count(), 1)
        
        # Delete the post - post report should be deleted
        self.post.delete()
        self.assertEqual(PostReport.objects.count(), 0)
        
        # Delete the reported user - user report should be deleted
        self.reported_user.delete()
        self.assertEqual(UserProfileReport.objects.count(), 0)