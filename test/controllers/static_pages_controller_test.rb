require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
   

  
rescue Exception => e
  
  test "should get root" do
    get root_path
    assert_response :success
  end
end
=begin
  
rescue Exception => e
  
end  test "should get home" do
    get root_path
    assert_response :success
    assert_select "title","Hedgehog"
  end

  test "should get help" do
    get help_path
    assert_response :success
    assert_select "title","Hedgehog"

  test "should get about" do
    get about_path
    assert_response :success
    assert_select "title","Hedgehog"
  end

  test "should get contact" do
    get contact_path
    assert_response :success
    assert_select "title","Hedgehog"
  end
end

=end