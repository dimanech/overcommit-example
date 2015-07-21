module Overcommit::Hook::CommitMsg
  # Ensures commit message match code convention.
  class CommitMsgPattern < Base
    def run

      if commit_message_lines[0].to_s.match(/^TB2\-\d+:\s(.*)/)
        return :pass
      else
        return :fail, 'Commit message should match pattern "TB2-NUM: Ticket description"'
      end

    end
  end
end